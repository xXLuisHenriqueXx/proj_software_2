import { Toy, ToyType, AgeRange, ToyPicture, User } from "../generated/prisma";
import { toyResponseSchema } from "../schemas/toyValidationSchemas";
import { z } from "zod";

const IMAGE_NOT_FOUND_ASSET = "/public/assets/image_not_found.png";
const AVATAR_NOT_FOUND_ASSET = "/public/assets/avatar_not_found.webp";

export type ToyInput = Toy & {
  ToyPictures: ToyPicture[];
  owner?: User;
};

export type fixedToy = z.infer<typeof toyResponseSchema>;
type FixToyResult = fixedToy | Omit<fixedToy, 'owner'>;

export const ToyHelper = {
    computeToyRelevance(
        toy: Toy,
        userProfile: {
            favoriteTypes: ToyType[];
            favoriteAgeGroups: AgeRange[];
            avgPrice: number;
            seenToyIds: string[];
        }
    ): number {
        let score = 0;

        if (toy.type.some(t => userProfile.favoriteTypes.includes(t))) {
            score += 5;
        }

        if (userProfile.favoriteAgeGroups.includes(toy.ageGroup)) {
            score += 3;
        }

        const priceDiff = Math.abs(toy.price - userProfile.avgPrice);
        if (priceDiff < 20) score += 2;
        else if (priceDiff < 50) score += 1;
        

        if (userProfile.seenToyIds.includes(toy.id)) {
            score -= 10;
        }

        return score;
    },

    fixToyObject(toy: ToyInput): FixToyResult {
        const pictures = toy.ToyPictures.map((p) => ({
            id: p.id,
            order: p.order,
            picture: p.picture,
        }));

        const fixedPictures = pictures.length > 0
            ? pictures
            : [
                {
                    id: "placeholder",
                    order: 0,
                    picture: IMAGE_NOT_FOUND_ASSET,
                },
            ];

        const baseToy = {
            id: toy.id,
            createdAt: toy.createdAt,
            name: toy.name,
            description: toy.description,
            price: toy.price,
            isNew: toy.isNew,
            canTrade: toy.canTrade,
            canLend: toy.canLend,
            usageTime: toy.usageTime,
            type: toy.type,
            ageGroup: toy.ageGroup,
            discount: toy.discount,
            pictures: fixedPictures,
            isFavorited: false,
        };

        if (toy.owner) {
            const fixedOwnerPicture = toy.owner.picture
                ? toy.owner.picture
                : AVATAR_NOT_FOUND_ASSET;

            const fixedOwnerName = toy.owner.name;
            const fixedOwnerId = toy.owner.id;

            return {
                ...baseToy,
                owner: {
                    id: fixedOwnerId,
                    name: fixedOwnerName,
                    picture: fixedOwnerPicture,
                },
            } as fixedToy;
        }

        return baseToy as Omit<fixedToy, 'owner'>;
    },

    fixToyListObject(toyList: ToyInput[]): FixToyResult[] {
        return toyList.map(this.fixToyObject);
    },
};
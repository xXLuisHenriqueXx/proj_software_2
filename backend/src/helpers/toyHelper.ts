import { Toy, ToyType, AgeRange } from "../generated/prisma";

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
    }

}
import { Offer } from "@prisma/client";
import { FilterUserOptionsOffer } from "./typeForFilter";


export function mainPeopleFilter(offer: Offer, currentFilter: FilterUserOptionsOffer) {
    if (currentFilter.filterMainPeople ?.length) {
        return currentFilter.filterMainPeople.includes(offer.filterMainPeople)
    }

    return true
}

export function detailBrandFilter(offers: Offer, currentFilter: FilterUserOptionsOffer) {
    if (currentFilter.detailFilterBrand ?.length) {
        return currentFilter.detailFilterBrand.includes(offers.detailFilterBrand)
    }
    return true
}

export function detailModeFilter(offers: Offer, currentFilter: FilterUserOptionsOffer) {
    if (currentFilter.detailFilterMode ?.length) {
        return currentFilter.detailFilterMode.includes(offers.detailFilterMode)
    }
    return true
}


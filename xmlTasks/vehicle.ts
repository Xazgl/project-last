export interface Vehicle {
    id: string[];
    vin: string[];
    uin: string[];
    dealer: BodyConfiguration[];
    category: BodyConfiguration[];
    subcategory: string[];
    type: string[];
    year: string[];
    brand: BodyConfiguration[];
    model: BodyConfiguration[];
    generation: BodyConfiguration[];
    bodyConfiguration: BodyConfiguration[];
    modification: BodyConfiguration[];
    complectation: BodyConfiguration[];
    brandComplectationCode: string[];
    engineType: string[];
    engineVolume: string[];
    enginePower: string[];
    bodyNumber: string[];
    bodyType: string[];
    bodyDoorCount: string[];
    bodyColor: string[];
    bodyColorMetallic: string[];
    driveType: string[];
    gearboxType: string[];
    gearboxGearCount: string[];
    steeringWheel: string[];
    mileage: string[];
    mileageUnit: string[];
    price: string[];
    special_price: string[];
    specialOffer: string[];
    specialOfferPreviousPrice: string[];
    priceWithDiscount: string[];
    tradeinDiscount: string[];
    creditDiscount: string[];
    insuranceDiscount: string[];
    availability: string[];
    ptsType: string[];
    country: string[];
    operatingTime: string[];
    ecoClass: string[];
    driveWheel: string[];
    axisCount: string[];
    brakeType: string[];
    cabinType: string[];
    maximumPermittedMass: string[];
    saddleHeight: string[];
    cabinSuspension: string[];
    chassisSuspension: string[];
    length: string[];
    width: string[];
    bodyVolume: string[];
    bucketVolume: string[];
    tractionClass: string[];
    refrigeratorClass: string[];
    craneArrowRadius: string[];
    craneArrowLength: string[];
    craneArrowPayload: string[];
    loadHeight: string[];
    photoCount: string[];
    description: string[];
    poi_id: string[];
    ownersCount: string[];
    extras: Extra[];
    photos: Photo[];
    phones: VehiclePhone[];
    brandColorCode: string[];
    brandInteriorCode: string[];
    certificationProgram: string[];
    acquisitionSource: string[];
    acquisitionDate: Date[];
    production: string[];
    equipment: string[];
    equipmentPrice: string[];
    comment: string[];
    withVAT: string[];
}

export interface BodyConfiguration {
    _: string;
    $: Brand;
}

export interface Brand {
    id: string;
}

export interface Extra {
    group: GroupElement[];
}

export interface GroupElement {
    $: Group;
    element: BodyConfiguration[];
}

export interface Group {
    id: string;
    name: string;
}

export interface VehiclePhone {
    phone: PhonePhone[];
}

export interface PhonePhone {
    _: string;
    $: Phone;
}

export interface Phone {
    number: string;
    callFrom: string;
    callTo: string;
}

export interface Photo {
    photo: string[];
}
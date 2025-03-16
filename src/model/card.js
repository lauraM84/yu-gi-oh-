export class Card {
    constructor(id, name, type, humanReadableCardType, frameType, desc, race, archetype, ygoprodeck_url, card_sets, card_images, card_prices, atk, def, level, attribute, linkval, linkmarkers, typeline) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.humanReadableCardType = humanReadableCardType;
        this.frameType = frameType;
        this.description = desc;
        this.race = race;
        this.archetype = archetype;
        this.ygoprodeck_url = ygoprodeck_url;
        this.card_sets = card_sets;
        this.card_images = card_images;
        this.card_prices = card_prices;
        this.atk = atk;
        this.def = def;
        this.level = level;
        this.attribute = attribute;
        this.linkval = linkval;
        this.linkmarkers = linkmarkers;
        this.typeline = typeline;
    }

}

export function fromJson(json) {
    return new Card(
        json.id,
        json.name,
        json.type,
        json.humanReadableCardType,
        json.frameType,
        json.desc,
        json.race,
        json.archetype,
        json.ygoprodeck_url,
        json.card_sets,
        json.card_images,
        json.card_prices,
        json.atk,
        json.def,
        json.level,
        json.attribute,
        json.linkval,
        json.linkmarkers,
        json.typeline
    );
}
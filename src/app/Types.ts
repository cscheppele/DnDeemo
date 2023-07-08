export interface Character {
    name: string;
    race: DndRace;
    class: dndClass;
}

export interface Player {
    id:string;
    name: string;
    characters: Character[];
}

export interface Room {
    id: string;
    messages: Message[];
    players: Player[]; //include DM
    DM: string //playerID
}

export interface Message {
    id: string;
    authorId: string;
    timeStamp: number;
    text: string;
}

export interface dndClass {
    name: string; //could just be capitalized name?
    slug: string; //versus uncapitalized name? unclear
    desc: string;
    hit_dice: string;
    hp_at_1st_level: string;
    hp_at_higher_levels: string;
    prof_armor: string;
    prof_weapons: string;
    prof_tools: string;
    prof_saving_throws: string;
    prof_skills: string;
    equipment: string;
    table: string;
    spellcasting_ability: string;
    subtypes_name: string;
    archetypes: {
        name: string;
        slug: string;
        desc: string;
        document__slug: string;
        document__title: string;
        document__license_url: string;
        document__url: string;
    }[]
    document__slug: string;
    document__title: string;
    document__license_url: string;
    document__url: string;
}

export interface DndRace {
    name: string;
    slug: string;
    desc: string;
    asi_desc: string;
    asi: {
        attributes: string[];
        value: string;
    }[],
    age: string;
    alignment: string;
    size: string;
    speed: {
        walk: number
    },
    speed_desc: string;
    languages: string;
    vision: string;
    traits: string;
    subraces: {
            name: string;
            slug: string;
            desc: string;
            asi: [
                {
                    attributes: string[],
                    value: number
                }
            ],
            traits:string;
            asi_desc: string;
            document__slug: string;
            document__title: string;
            document__url: string;
        }[];
    document__slug: string;
    document__title: string;
    document__license_url: string;
    document__url: string;
}

export interface Monster {
    slug: string;
    desc: string;
    name: string;
    size: string;
    type: string;
    subtype: string;
    group: string | null,
    alignment: string;
    armor_class: number;
    armor_desc: string;
    hit_points: number;
    hit_dice: string;
    speed: {
        walk: number;
        swim: number;
    },
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    strength_save: number | null,
    dexterity_save: number | null,
    constitution_save: number;
    intelligence_save: number;
    wisdom_save: number;
    charisma_save: number | null,
    perception: number;
    skills: {
        history: number;
        perception: number;
    },
    damage_vulnerabilities: string
    damage_resistances: string;
    damage_immunities: string;
    condition_immunities: string;
    senses: string;
    languages: string;
    challenge_rating: string;
    cr: number;
    actions: {
        name: string;
        desc: string;
        attack_bonus?: number;
        damage_dice?: string;
        damage_bonus?: number;
    }[];
    reactions: string;
    legendary_desc: string;
    legendary_actions: {
        name: string;
        desc: string;
    }[];
    special_abilities: {
        name: string;
        desc: string;
    }[];
    spell_list: Spell[];
    page_no: number;
    environments: string[];
    img_main: string;
    document__slug: string;
    document__title: string;
    document__license_url: string;
    document__url: string;
}

export interface Spell {
    slug: string;
    name: string;
    desc: string;
    higher_level: string;
    page: string;
    range: string;
    target_range_sort: number;
    components: string;
    requires_verbal_components: boolean;
    requires_somatic_components: boolean;
    requires_material_components: boolean;
    material: string;
    can_be_cast_as_ritual: boolean;
    ritual: string;
    duration: string;
    concentration: string;
    requires_concentration: boolean;
    casting_time: string;
    level: string;
    level_int: number
    spell_level: number
    school: string;
    dnd_class: string;
    spell_lists: string[]
    archetype: string
    circles: string
    document__slug: string;
    document__title: string;
    document__license_url: string;
    document__url: string;
    }

export interface ClassSpellList {
    slug: string;
    name: string;
    desc: string;
    spells: string[];
    document__slug: string;
    document__title: string;
    document__license_url: string;
    document__url: string;
}
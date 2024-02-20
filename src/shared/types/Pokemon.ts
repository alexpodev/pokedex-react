export type Pokemon = {
    name: string,
    url: string,
    isVisible: boolean
} 

export type PokemonDetails = {
    name: string,
    sprite: string,
    id: number,
    stats: Stat[],
    types: Type[],
    height: number,
    weight: number,
    abilities: Ability[],
    moves: Move[]
}

export type Move = {
    move: {
        name: string,
        url: string,
    },
    version_group_details: VersionGroupDetails[]
    
}

export type VersionGroupDetails = {
    level_learned_at: 0,
    move_learn_method: {
        name: string,
        url: string
    },
    version_group: {
        name: string,
        url: string
    }
}

export type MoveDetalis = {
    name: string,
    type: {name: string, url: string},
}

export type DamageClass = {
    name: string,
    url: string
}

export type Ability = {
    ability: {name: string, url: string},
    is_hidden: boolean,
    slot: number
}

export type Stat = {
    base_stat: number,
    effort: number,
    stat: {
        name: string,
        url: string
    }
}

export type Type = {
    slot: number,
    type: {
        name: string,
        url: string
    }
}
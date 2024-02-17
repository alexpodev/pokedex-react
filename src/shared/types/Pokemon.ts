export type Pokemon = {
    name: string,
    url: string,
    isVisible: boolean
} 

export type PokemonDetails = {
    name: string,
    sprite: string,
    id: number,
    stats: Stat[]
    types: Type[]
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
export const getPlantBySlug = (list, slugPlant) => {
    return list.find(plant => plant.slug === slugPlant)
}

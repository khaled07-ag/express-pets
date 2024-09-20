const Pet = require("../models/Pet");

const getAllPets = async (req, res, next) => {
  try {
    const pets = await Pet.find();
    return res.status(200).json(pets);
  } catch (error) {
    next(error)
  }
};

const createPet = async (req, res, next) => {
  try {
  if(req.file){
  req.body.image = req.file.path;
  }
    const newPet = await Pet.create(req.body);
   return res.status(201).json({data: newPet});
  } catch (error) {
    console.log(error)
    next(error)
  }
}

const getOnePet =  async (req, res, next) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) return res.status(404).json({ error: 'Pet not found' });
    return res.status(200).json(pet);
  } catch (error) {
    next(error);
  }
}

const deleteOnePet = async (req, res, next) => {
  try {
    const deletedPet = await Pet.findByIdAndDelete(req.params.id);
    if (!deletedPet) return res.status(404).json({ message: 'Pet not found' });
    return res.status(200).json({ message: 'Pet deleted successfully' , data: deletedPet});
  } catch (error) {
    next(error)
  }
}
  const updatePet = async (req, res, next) => {
  try {
    const updatedPet = await Pet.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!updatedPet) return res.status(404).json({ message: 'Pet not found' });
    return res.status(200).json(updatedPet);
  } catch (error) {
    next(error);
  }
}
  
  module.exports = {getAllPets, createPet, getOnePet, deleteOnePet, updatePet}
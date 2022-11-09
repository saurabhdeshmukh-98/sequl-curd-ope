const sequelize=require('../config/dataBase')
const Element=require('../entiity/element')

const add=async(req,res)=>{
    try {
        const resp=await Element.create(req.body)
        res.send(resp)
    } catch (error) {
        res.send("error")
    }
}

const getAll = async (req, res) => {
  try {
    const resp = await Element.findall();
    res.status(200).json({
      result: resp,
      message: "sucssefully saved..",
    });
  } catch (error) {
    res.status(400).json({
      message: "sorry it is not find..",
    });
  }
};

const findById = async (req, res) => {
  try {
    const resp = await Element.findByPK(req.params.id);
    res.status(200).json({
      result: resp,
      message: "sucessfully getting..",
    });
  } catch (error) {
    res.status(400).json({
      message: "not getting..",
    });
  }
};

const updateAll = async (req, res) => {
  try {
    const resp = await Element.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      result: resp,
      message: "sucessfull updateing..",
    });
  } catch (error) {
    res.status(400).errorjson({
      message: "not updateing..",
    });
  }
};

const deleteDetails = async (req, res) => {
  try {
    const resp = await Element.destroy(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      result: resp,
      message: "data deleted..",
    });
  } catch (error) {
    res.status(400).json({
      message: " data not deleted..",
    });
  }
};

module.exports = {
  add,
  getAll,
  findById,
  updateAll,
  deleteDetails,
};

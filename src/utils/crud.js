export const getOne = (model) => async (req, res) => {
  try {
    const { id } = req.params;
    const { _id: userId } = req.user;
    const doc = await model
      .findOne({
        _id: id,
        createdBy: userId,
      })
      .exec();
    if (!doc) return res.status(404).end();
    res.status(200).json({ data: doc });
  } catch (error) {
    console.error(error);
    res.status(404).end();
  }
};

export const getMany = (model) => async (req, res) => {
  try {
    const { _id: userId } = req.user;
    const docs = await model
      .find({
        createdBy: userId,
      })
      .exec();
    res.status(200).json({ data: docs });
  } catch (error) {
    console.error(error);
    res.status(400).end();
  }
};

export const createOne = (model) => async (req, res) => {
  try {
    const { _id: userId } = req.user;
    const doc = await model.create({
      ...req.body,
      createdBy: userId,
    });
    res.status(201).json({ data: doc });
  } catch (error) {
    console.error(error);
    res.status(400).end();
  }
};

export const updateOne = (model) => async (req, res) => {
  try {
    const { id } = req.params;
    const { _id: userId } = req.user;
    const doc = await model.findOneAndUpdate(
      {
        _id: id,
        createdBy: userId,
      },
      req.body,
      { new: true }
    );
    if (!doc) return res.status(400).end();
    res.status(200).json({ data: doc });
  } catch (error) {
    console.error(error);
    res.status(400).end();
  }
};

export const removeOne = (model) => async (req, res) => {
  try {
    const { id } = req.params;
    const { _id: userId } = req.user;
    const doc = await model
      .findOneAndRemove({
        _id: id,
        createdBy: userId,
      })
      .exec();
    if (!doc) return res.status(400).end();
    res.status(200).json({ data: doc });
  } catch (error) {
    console.error(error);
    res.status(400).end();
  }
};

export const crudControllers = (model) => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model),
});

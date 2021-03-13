const express = require('express');
const router = express.Router();
const Alumno = require('../model/alumnos');

router.get('/', async (req, res) => {
  const alumnos = await Alumno.find();
  res.render('index', {
    alumnos
  });
});

router.post('/add', async (req, res, next) => {
  const alumno = new Alumno(req.body);
  await alumno.save();
  res.redirect('/');
});

router.get('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const alumno = await Alumno.findById(id);
  res.render('edit',{
    alumno
  })
});

router.post('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  await Alumno.updateOne({_id: id}, req.body);
  res.redirect('/');
});

router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await Alumno.remove({_id: id});
  res.redirect('/');
});


module.exports = router;
const { Router } = require('express');
const { getMeal, saveMeals, deleteMeal, editMeal } = require('./MealController');

const router = Router();

router.get('/', getMeal);
router.post('/saveMeals', saveMeals);
router.post('/deleteMeal', deleteMeal); //Здесь часто используется метод Post и все работает так же, просто пишем пост и в постман выбираем пост, остальное все так же
router.put('/editMeal', editMeal); //здесь тоже можно пост

module.exports = router;
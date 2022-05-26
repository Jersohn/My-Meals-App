import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    imageUrl:
      "https://www.simpleimageresizer.com/_uploads/photos/84190dac/depositphotos_67657295-stock-photo-japanese-seafood-sushi-set_300x200.jpg",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    imageUrl:
      "https://www.simpleimageresizer.com/_uploads/photos/84190dac/classic-pork-schnitzel-feature-500x500_300x200.jpg",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    imageUrl:
      "https://www.simpleimageresizer.com/_uploads/photos/84190dac/telechargement_300x200.jpg",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    imageUrl:
      "https://www.simpleimageresizer.com/_uploads/photos/84190dac/Buddha-bowl-green_300x200.jpg",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      image={meal.imageUrl}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

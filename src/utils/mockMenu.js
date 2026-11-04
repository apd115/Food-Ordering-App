import resListData from "../components/MockData/MocksResList.json";

// Sample dishes per cuisine. Prices are in paise (₹1 = 100 paise), like Swiggy's API.
const DISHES = {
  Pizzas: [["Margherita Pizza", 24900], ["Farmhouse Pizza", 34900], ["Garlic Bread", 14900]],
  Pastas: [["Penne Arrabbiata", 22900], ["Alfredo Pasta", 25900]],
  Burgers: [["Veg Burger", 12900], ["Crispy Chicken Burger", 17900], ["French Fries", 9900]],
  "North Indian": [["Paneer Butter Masala", 24900], ["Dal Makhani", 21900], ["Butter Naan", 4500]],
  Chinese: [["Veg Hakka Noodles", 17900], ["Chilli Paneer", 21900], ["Manchurian", 18900]],
  Biryani: [["Chicken Biryani", 27900], ["Veg Biryani", 21900]],
  Desserts: [["Chocolate Brownie", 12900], ["Gulab Jamun", 8900]],
  Beverages: [["Cold Coffee", 11900], ["Fresh Lime Soda", 6900]],
};
const FALLBACK = [["Chef's Special", 24900], ["House Platter", 29900], ["Soft Drink", 5900]];

const makeItem = (resId, cat, i, [name, price]) => ({
  card: {
    info: {
      id: `${resId}-${cat}-${i}`,
      name,
      price,
      description: `Freshly prepared ${name.toLowerCase()}.`,
      // no imageId: ItemList skips the image when it is missing
    },
  },
});

const makeCategory = (resId, title, dishes) => ({
  card: {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
      title,
      itemCards: dishes.map((d, i) => makeItem(resId, title, i, d)),
    },
  },
});

// Builds data in the same shape as Swiggy's menu API, so RestaurantMenu needs no changes.
export const getMockMenu = (resId) => {
  const res = resListData.find((r) => r.info.id === String(resId))?.info;
  if (!res) return null;

  const categories = res.cuisines
    .filter((c) => DISHES[c])
    .map((c) => makeCategory(res.id, c, DISHES[c]));
  if (categories.length === 0) categories.push(makeCategory(res.id, "Recommended", FALLBACK));

  return {
    cards: [
      {},
      {},
      {
        card: {
          card: {
            info: {
              name: res.name,
              cuisines: res.cuisines,
              avgRating: res.avgRating,
              totalRatings: parseFloat(res.totalRatingsString) * (/K/i.test(res.totalRatingsString) ? 1000 : 1) || 0,
              costForTwoMessage: res.costForTwo,
              aggregatedDiscountInfo: { descriptionList: [] },
            },
          },
        },
      },
      {},
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [{ card: { card: { itemCards: categories[0].card.card.itemCards } } }, ...categories],
            },
          },
        },
      },
    ],
  };
};

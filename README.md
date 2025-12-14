# The Relationship Between Calories and Recipe Rating
### DSC 80 Final Project @ UCSD

**An interactive data science project analyzing over 83,000 recipes to determine if nutritional value influences user satisfaction on Food.com.**

🔗 <a href="https://musubi3.github.io/recipe-calories-relationship/" target="_blank"><strong>View the Live Project Here</strong></a>

---

## 📊 Project Overview
We often associate high-calorie foods with better taste, but does that actually translate to higher user ratings? This project digs into the data to find out.

The analysis follows three main chapters:

1.  **The Setup:** <br>Cleaning and merging massive datasets of recipes and user interactions to calculate robust average ratings and handle missing data (NMAR).

2.  **The Test:** <br>Using permutation testing to challenge the assumption that "unhealthy" implies "better rated."

3.  **The Prediction:** <br>Building a machine learning model to predict whether a recipe will be a hit (High Rating), average (Medium), or a flop (Low) based on metadata like description length and complexity.

---

## ⚙️ Methodology: Prediction & Fairness
To go beyond simple correlations, I developed a **Random Forest Classifier** to predict recipe success.

The final model utilizes `GridSearchCV` for hyperparameter tuning and relies on engineered features including:

1.  **Recipe Complexity:**<br>Measured by `avg_step_desc_length` and `n_steps` to gauge effort required.<br><br>
2.  **User Engagement:**<br>Measured by `description_length`, capturing the "hook" of the recipe.<br><br>
3.  **Nutritional Context:**<br>Incorporating `calories` (scaled via RobustScaler) and dietary tags (`is_dietary`).

> **Fairness Analysis:**<br>
> I performed a permutation test to ensure the model performs equitably. The result showed **no significant difference** in precision between High-Calorie and Low-Calorie recipes (p-value: 0.47), confirming the model is fair.

*See the full analysis script in [`notebooks/recipe_calories_analysis.ipynb`](notebooks/recipe_calories_analysis.ipynb).*

---

## 🗝️ Key Findings
Through statistical hypothesis testing (Difference of Means), I discovered a counter-intuitive trend: **Low-calorie recipes are actually rated higher on average** than high-calorie recipes (p-value: 0.039).

Additionally, the missingness analysis revealed that ratings are **Missing at Random (MAR)** dependent on the calorie count, users are more likely to leave reviews for recipes with specific caloric profiles.

---

## 🛠️ Tech Stack
* **Frontend:**<br>HTML5, CSS3, JavaScript.<br><br>
* **Analysis:**<br>Python (Pandas, NumPy, Scikit-Learn).<br><br>
* **Visualization:**<br>Plotly (Interactive plots embedded in the web report).

---

## 📂 Data Sources
The analysis is based on two primary datasets originating from Food.com:

| Dataset | Source | Description |
| :--- | :--- | :--- |
| **Recipes** | [Food.com](https://www.kaggle.com/datasets/shuyangli98/food-com-recipes-and-user-interactions) | Contains 83,000+ recipes with nutrition info, steps, ingredients, and tags. |
| **Ratings** | [Food.com](https://www.kaggle.com/datasets/shuyangli98/food-com-recipes-and-user-interactions) | User interactions including numerical ratings (1-5) and text reviews. |
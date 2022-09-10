import { useGlobalContext } from '../context'
import { BsHandThumbsUp } from 'react-icons/bs'
import { BsHandThumbsUpFill } from 'react-icons/bs'

const Meals = () => {
	const { loading, meals, selectMeal, favorites, addToFavorites } = useGlobalContext()
	const favoriteIcon = (idMeal) => {
		const alreadyFavorite = favorites.find((meal) => meal.idMeal === idMeal)
		return(
			alreadyFavorite ? <BsHandThumbsUpFill /> : <BsHandThumbsUp />
		)
	}

	if (loading) {
		return <section className="section">
			<h4>Loading...</h4>
		</section>
	}

	if (meals.length < 1) {
		return <section className="section">
			<h4>No meals matched your search term. Please try something different.</h4>
		</section>
	}

	return <section className='section-center'>
		{meals.map((singleMeal) => {
			const { idMeal, strMeal: title, strMealThumb: image } = singleMeal
			return <article key={idMeal} className='single-meal'>
				<img src={image} className="img" alt={title} onClick={() => selectMeal(idMeal)} />
				<footer>
					<h5 onClick={() => selectMeal(idMeal)}>{title}</h5>
					<button className="like-btn" onClick={() => addToFavorites(idMeal)}>
						{favoriteIcon(idMeal)}
					</button>
				</footer>
			</article>
		})}
	</section>
}

export default Meals
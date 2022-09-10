import { useGlobalContext } from '../context'

const Modal = () => {
	const { selectedMeal, closeModal } = useGlobalContext()
	const { strMealThumb: image, strMeal: title, strInstructions: text, strSource: source } = selectedMeal
	return <aside className="modal-overlay" onClick={closeModal}>
		<div className="modal-container">
			<img src={image} alt={title} className="img modal-img" onClick={e => e.stopPropagation()} />
			<div className="modal-content" onClick={e => e.stopPropagation()}>
				<h4>{title}</h4>
				<p>Cooking Instructions</p>
				<p>{text}</p>
				<a href={source} target="_blank">Original Source</a>
				<button className="btn btn-hipster close-btn" onClick={closeModal}>Close</button>
			</div>
		</div>
	</aside>
}

export default Modal
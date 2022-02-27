import { useDispatch, useSelector } from "react-redux";
import { changeShowName } from "../../store/profile/actions";


export const Profile = () => {
	const dispatch = useDispatch();
	const { showName, name } = useSelector((state) => state);

	const handleCheckbox = () => {
		dispatch(changeShowName);
	}

	return (
		<>
			<input type="checkbox" onChange={handleCheckbox} />
			<h1>Profile {showName && <span>{ name }</span>}</h1>
		</>
	)
}
import './styles.css'

export const TextInput = ({searchValue, handleChange}) => {
  return <input
    type="search"
    value={searchValue}
    onChange={(e) => handleChange(e)}
    className="text-input"
    placeholder="Type your search"
  />
}
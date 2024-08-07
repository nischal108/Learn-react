import React from 'react'

const SearchSuggest = ({suggestedText}) => {
  return (
    <div className='px-2 py-2 hover:bg-red-50 cursor-pointer'> {suggestedText} </div>
  )
}

export default SearchSuggest
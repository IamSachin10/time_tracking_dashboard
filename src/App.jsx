import jeremyPicture from './images/image-jeremy.png'
function App(){
  return (
    <>
  <header className='capitalize bg-darkBlue rounded-t-xl rounded-b-xl'>
    <div className='flex items-center justify-center bg-Blue gap-2 rounded-xl p-6'>
      <img src={jeremyPicture} alt="admin-profile-picture" className=' block w-16' />
      <div>
        <p>report for</p>
        <h1>jeremy robson</h1>
      </div>
    </div>
    <div className='flex justify-between text-sm p-4 cursor-pointer text-desaturatedBlue'>
      <p className=' hover:text-white'>daily</p>
      <p className=' hover:text-white'>weekly</p>
      <p className=' hover:text-white'>monthly</p>
    </div>
  </header>
    </>
  )
}

export default App

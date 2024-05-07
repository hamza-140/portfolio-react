import profilePic from '../src/assets/me.jpg';
const Header = () => {
  return (
    <header className='flex'>
  <div className="flex ml-auto mr-auto flex-col items-center justify-center p-4 text-center">
    <h1 className="text-2xl font-bold mb-2 text-center">Hamza Syed</h1>
    <p className="text-sm text-gray-600 text-center">
      Technophile learning the ways to come out on top 🚀.
    </p>
  </div>

  <div className="flex justify-end">
    <img 
      src={profilePic} 
      alt="Profile" 
      style={{height:'150px',width:'150px',marginRight:'30px', marginTop:'5px',marginBottom:'5px'}}
      className="rounded-full w-24 h-24 object-cover"
    />
  </div>
</header>

  );
}

export default Header;

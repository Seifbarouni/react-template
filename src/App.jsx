const App = () => {
  return (
    <div className="bg-gradient-to-br from-red-400 to-purple-500 flex h-screen justify-center items-center">
      <div className="text-3xl bg-white p-6 rounded-lg shadow-lg">
        React template with tailwindcss
      </div>
      {/* this glass effect works for all browsers except firefox  */}
      {/* <div className=" text-3xl  rounded-2xl p-6 shadow-md bg-gray-100 to-transparent  bg-opacity-20 h-80 z-20 backdrop-filter backdrop-blur-lg flex items-center">
        <div>
          React template with tailwindcss
        </div>
      </div>
      <div className="relative">
        <div className="rounded-full h-64 w-64 absolute top-1/2 -right-12 bg-gradient-to-br from-white to-transparent z-0"></div>
        <div className="rounded-full h-40 w-40 absolute -top-52 right-96 bg-gradient-to-tl from-white to-transparent z-0"></div>
      </div> */}
    </div>
  );
};

export default App;

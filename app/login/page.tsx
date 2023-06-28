// async function fetchTestData(): Promise<{ message: string }> {
//   const response = await fetch(process.env.API_URL + "/api/test");
//   const jsonData = await response.json();
//   return jsonData;
// }

const Login = async () => {
  // const data = await fetchTestData();

  return (
    <div>
      <p>This is the login page</p>
      {/* <p>{data.message}</p> */}
    </div>
  );
};

export default Login;

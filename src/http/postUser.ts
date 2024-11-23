// export async function postUserInfo({ userInfo }) {
//   const response = await fetch(`http://localhost:8080/user`, {
//     method: 'PUT',
//     body: JSON.stringify({ userInfo }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   if (!response.ok) {
//     const error = new Error('An error occurred while updating the event');
//     error.code = response.status;
//     error.info = await response.json();
//     throw error;
//   }

//   return response.json();
// }

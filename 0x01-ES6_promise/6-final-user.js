import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);
  return Promise.allSettled([signUpUserPromise, uploadPhotoPromise])
    .then((res) => (res.map((obj) => ({
      status: obj.status,
      value: obj.status === 'fulfilled' ? obj.value : String(obj.reason),
    }))
    ));
}

import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

export default function newMeetup() {
  const router = useRouter();
  const addMeetupHandler = async (meetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    router.push("/");
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

// // our-domain.com/new-meetup
// import { useRouter } from "next/router";

// import NewMeetupForm from "../../components/meetups/NewMeetupForm";

// export default function NewMeetupPage() {
//   const router = useRouter();

//   async function addMeetupHandler(enteredMeetupData) {
//     const response = await fetch("/api/new-meetup", {
//       method: "POST",
//       body: JSON.stringify(enteredMeetupData),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     // if (!response.ok) {
//     //   throw new Error("no");
//     // } else {
//     const data = await response.json();
//     console.log(data);

//     router.push("/");
//     // }
//     //   } catch (err) {
//     //     () => console.log(`err`, err);
//     //   }
//   }

//   return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
// }

// // export default NewMeetupPage;

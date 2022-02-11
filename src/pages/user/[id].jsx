import styles from './userProfile.module.scss';
import Image from 'next/image';
import Post from '../../components/post/post.component.jsx';
import { fetchActions } from '../../slices/fetchSlice';
import { useDispatch } from 'react-redux';

export const getStaticPaths = async () => {
    try{
        const res = await fetch("https://dummyapi.io/data/v1/user", 
        {headers:{
            "app-id":`${process.env.NEXT_PUBLIC_APP_ID}`
        }});
          const data = await res.json();
          const paths = data.data?.map((provider) => {
              return {
                  params: {id: provider.id.toString()}
                };
          })
          
          return {
              paths,
              fallback: true
          }
        }catch (error){
            console.log(error.message);
            return { paths: [], fallback: true}
        }
  }
  export const getStaticProps = async (context) => {
        try{
            const id = context.params.id;
            const res = await fetch("https://dummyapi.io/data/v1/user/" + id, 
            {headers:{
                "app-id":`${process.env.NEXT_PUBLIC_APP_ID}`
            }});
            const data = await res.json();
            const postsRes = await fetch(`https://dummyapi.io/data/v1/user/${id}/post?limit=20`, 
            {headers:{
                "app-id":`${process.env.NEXT_PUBLIC_APP_ID}`
            }});
            const postsData = await postsRes.json();
        
            return{
                props:{ providers: {data, postsData} }
            }
            
        }catch (error) {
            console.log(error.message);
        }
            
  }

function UserPage({providers}){
    const dispatch = useDispatch();
    const {appendProvider} = fetchActions;
    dispatch(appendProvider(providers));
    return (
        <div style={{marginLeft:"10%"}}>
            <div className={styles.mainUser_container}>
                <div>
                    <div className={styles.profileImg_container}><Image alt='#UserImg' src={providers.data.picture} layout="fill"/></div>
                        <h3>{providers.data.firstName + " " + providers.data.lastName}</h3>
                </div>
                <div className={styles.PersonalData_container}>
                    <p><font color="#1D9BF0">Joined Date:</font> {providers.data.registerDate.slice(0, 10)}</p>
                    <p><font color="#1D9BF0">Date of birth: </font> {providers.data.dateOfBirth.slice(0, 10)}</p>
                    <p><font color="#1D9BF0">Email Address: </font> {providers.data.email}</p>
                    <p><font color="#1D9BF0">Phone Number: </font> {providers.data.phone}</p>
                    <p><font color="#1D9BF0">Gender:</font> {providers.data.gender}</p>
                    <p><font color="#1D9BF0">Location:</font>  {providers.data.location.street + " " + providers.data.location.city + " " + providers.data.location.state + " " + providers.data.location.country}</p>
                </div>
            </div>
            {providers.postsData.data.map(post => (
                <Post post={post} key={post.id}/>
            ))}
        </div>
    );
}

export default UserPage;
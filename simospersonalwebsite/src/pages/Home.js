import './Home.css';

function Home() {
    return(
        <>
            <div className="profile-picture">
                <img width="300" height="300" src="https://scontent.fnic1-2.fna.fbcdn.net/v/t39.30808-6/416152826_7034023896693967_3832700787944172278_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=H2c21DKOyX0Q7kNvwE1jitY&_nc_oc=AdkBiBxqhgssjaOv_9svfTFkLHA4M1JIrN7Q6-FJVsvZKRScZrm-N4zlaqRb3L90-WU&_nc_zt=23&_nc_ht=scontent.fnic1-2.fna&_nc_gid=9XM3-L6HlB1oQZJxzgOLMg&oh=00_AfKpRpKSZ60PyrogQ1OyxzzggxLZ2408OWQRmCZzKLBuhA&oe=684070AB"/>
            </div>
            <div className="home-content">
                <h4>
                   Hello there!
                </h4>
                <h1>I am <span>Simos Imbraem</span><br />a Full Stack Developer</h1>
            </div>
        </>
    )
}

export default Home;
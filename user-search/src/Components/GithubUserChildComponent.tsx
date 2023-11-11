import styles from "./GithubUserChildComponent.module.css";
import { UserInterface } from "./UserInterface";

function GithubUserChildComponent(props: {
  mode: boolean;
  searchResult: UserInterface[] | null;
}) {
  return (
    <div>
      {props.searchResult &&
        props.searchResult.map((user) => (
          <div key={user.id}>
            <div
              className={
                props.mode
                  ? styles.userMainContainerDarkMode
                  : styles.userMainContainerLightMode
              }
            >
              <div className={styles.avatarContainer}>
                <img
                  src={user.avatarImg}
                  alt="avatar"
                  className={styles.avatarImg}
                />
              </div>
              <div className={styles.userAccount}>
                <div className={styles.userHeader}>
                  <div>
                    <h3
                      className={
                        props.mode
                          ? styles.userNameDarkMode
                          : styles.userNameLightMode
                      }
                    >
                      {user.userName}
                    </h3>
                    <p className={styles.userGmail}>{user.gmail}</p>
                    <p
                      className={
                        props.mode ? styles.darkColor : styles.lightColor
                      }
                    >
                      {user.bio}
                    </p>
                  </div>
                  <p
                    className={
                      props.mode ? styles.darkColor : styles.lightColor
                    }
                  >
                    join {user.joinDate.monthNumber}{" "}
                    {user.joinDate.monthOfTheYear} {user.joinDate.year}
                  </p>
                </div>

                <div
                  className={
                    props.mode ? styles.userDarkBody : styles.userLightBody
                  }
                >
                  <div>
                    <p
                      className={`${styles.repo} ${
                        props.mode ? styles.darkColor : styles.lightColor
                      }`}
                    >
                      repos
                    </p>
                    <p
                      className={`${styles.pMargin} ${
                        props.mode ? styles.darkColor : ""
                      }`}
                    >
                      {user.profileInfo.repos}
                    </p>
                  </div>
                  <div>
                    <p
                      className={`${styles.followers} ${
                        props.mode ? styles.darkColor : styles.lightColor
                      }`}
                    >
                      followers
                    </p>
                    <p
                      className={`${styles.pMargin} ${
                        props.mode ? styles.darkColor : ""
                      }`}
                    >
                      {user.profileInfo.followers}
                    </p>
                  </div>
                  <div>
                    <p
                      className={`${styles.following} ${
                        props.mode ? styles.darkColor : styles.lightColor
                      }`}
                    >
                      following
                    </p>
                    <p
                      className={`${styles.pMargin} ${
                        props.mode ? styles.darkColor : ""
                      }`}
                    >
                      {user.profileInfo.following}
                    </p>
                  </div>
                </div>

                <div
                  className={
                    props.mode ? styles.userDarkFooter : styles.userLightFooter
                  }
                >
                  <div>
                    <div className={styles.footerDisplay}>
                      {" "}
                      <div className={styles.footerIconContainer}>
                        <i className="fa-solid fa-location-dot"></i>
                      </div>{" "}
                      <span className={styles.footerSpan}>
                        {user.mainInfo.location}
                      </span>
                    </div>
                    <div className={styles.footerDisplay}>
                      {" "}
                      <div className={styles.footerIconContainer}>
                        <i className="fa-solid fa-link"></i>
                      </div>{" "}
                      <span
                        className={`${styles.footerSpan} ${styles.githubLink}`}
                      >
                        {user.mainInfo.githubLink}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className={styles.footerDisplay}>
                      {" "}
                      <div className={styles.footerIconContainer}>
                        <i className="fa-brands fa-twitter"></i>
                      </div>{" "}
                      <span className={styles.footerSpan}>
                        {user.mainInfo.twitter}
                      </span>
                    </div>
                    <div className={styles.footerDisplay}>
                      {" "}
                      <div className={styles.footerIconContainer}>
                        <i className="fa-solid fa-building"></i>
                      </div>{" "}
                      <span className={styles.footerSpan}>
                        {user.mainInfo.company}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default GithubUserChildComponent;

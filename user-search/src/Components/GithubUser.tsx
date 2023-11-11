import styles from "./GithubUser.module.css";
import GithubUserChildComponent from "./GithubUserChildComponent";
import { useState } from "react";
import UserData from "./UserData.json";

function GithubUser() {
  const [mode, setMode] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [searchResult, setSearchResult] = useState<any>(null);
  const [notFound, setNotFound] = useState<string>("");

  const handleSearch = () => {
    const result = UserData.find(
      (user) => user.userName.toLowerCase() === input.toLowerCase()
    );

    if (result) {
      setSearchResult(result ? [result] : null);
      setNotFound("");
    } else {
      setNotFound("no results");
    }
    setInput('');
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={mode ? styles.darkMode : styles.lightMode}>
      <div className={styles.githubInputContainer}>
        <div className={styles.githubUserHeader}>
          <h3 className={mode ? styles.headerDarkMode : ""}>Devfinder</h3>
          <div onClick={() => setMode(!mode)}>
            <p
              className={mode ? styles.changeDarkMode : styles.changeLightMode}
            >
              DARK{" "}
              {mode ? (
                <i className="fa-solid fa-sun"></i>
              ) : (
                <i className="fa-solid fa-moon"></i>
              )}
            </p>
          </div>
        </div>

        <div className={styles.inputContainer}>
          <input
            className={mode ? styles.inputDarkMode : styles.inputLightMode}
            type="text"
            placeholder="Search Github username..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyPress={handleKeyPress}
          />

          <div className={styles.positionContainer}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <button
              type="submit"
              className={styles.searchButton}
              onClick={handleSearch}
            >
              Search
            </button>
            <span className={styles.notFoundClass}>{notFound}</span>
          </div>
        </div>
        <GithubUserChildComponent mode={mode} searchResult={searchResult} />
      </div>
    </div>
  );
}

export default GithubUser;

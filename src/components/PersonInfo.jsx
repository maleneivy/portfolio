import personInfo from '@/data/personInfo';

const PersonInfo = () => {
  return (
    <>
      <div>
        <h1>{personInfo.name}</h1>
        <h3>{personInfo.occupation}</h3>
      </div>
      <div>
        <h2>About</h2>
        <p>{personInfo.about}</p>
      </div>
      <div>
        <h2>Skills</h2>
        <div>
          <h3>Programming Languages</h3>
          <div className="flex gap-4">
            {personInfo.skills.programmingLanguages.map((language, index) => (
              <p key={index}>{language}</p>
            ))}
          </div>
        </div>
        <div>
          <h3>Frameworks</h3>
          <div className="flex gap-4">
            {personInfo.skills.frameworks.map((framework, index) => (
              <p key={index}>{framework}</p>
            ))}
          </div>
        </div>
        <div>
          <h3>Styling</h3>
          <div>
            <div className="flex gap-4">
              {personInfo.skills.styles.map((style, index) => (
                <p key={index}>{style}</p>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h3>Other</h3>
          <div className="flex gap-4">
            {personInfo.skills.other.map((skill, index) => (
              <p key={index}>{skill}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonInfo;

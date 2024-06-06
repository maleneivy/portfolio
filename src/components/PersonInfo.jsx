import personInfo from '@/data/personInfo';

const PersonInfo = () => {
  return (
    <div className="mx-8 sm:mx-10">
      <div className="mt-10 sm:mt-20">
        <h2 id="about" className="mb-2">
          About
        </h2>
        <p>{personInfo.about}</p>
      </div>
      <div className="mt-4 sm:mt-8">
        <h2 id="skills">Skills</h2>
        <div>
          <h3>Programming Languages</h3>
          <div className="flex gap-4">
            {personInfo.skills.programmingLanguages.map((language, index) => (
              <p key={index}>{language}</p>
            ))}
          </div>
        </div>
        <div className="mt-4 sm:mt-8">
          <h3>Frameworks</h3>
          <div className="flex gap-4">
            {personInfo.skills.frameworks.map((framework, index) => (
              <p key={index}>{framework}</p>
            ))}
          </div>
        </div>
        <div className="mt-4 sm:mt-8">
          <h3>Styling</h3>
          <div>
            <div className="flex flex-wrap gap-4">
              {personInfo.skills.styles.map((style, index) => (
                <p key={index}>{style}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 sm:mt-8">
          <h3>Other</h3>
          <div className="flex gap-4">
            {personInfo.skills.other.map((skill, index) => (
              <p key={index}>{skill}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonInfo;

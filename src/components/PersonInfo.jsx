import personInfo from '@/data/personInfo';

const PersonInfo = () => {
  return (
    <div className="mx-8 sm:mx-10">
      <div className="mt-10 sm:mt-20">
        <h2 id="about" className="mb-2">
          About
        </h2>
        <hr className="border-3 mb-2 mt-0 border-blueGreen-200" />
        <p className="font-light">{personInfo.about}</p>
      </div>
      <div className="mt-4 sm:mt-8">
        <h2 id="skills">Skills</h2>
        <hr className="border-3 mb-2 mt-0 border-blueGreen-200" />
        <div className="mt-4">
          <h4>Programming Languages</h4>
          <div className="flex gap-4">
            {personInfo.skills.programmingLanguages.map((language, index) => (
              <p key={index} className="text-blueGreen-200">
                {language}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-4 sm:mt-8">
          <h4>Frameworks</h4>
          <div className="flex gap-4">
            {personInfo.skills.frameworks.map((framework, index) => (
              <p key={index} className="text-blueGreen-200">
                {framework}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-4 sm:mt-8">
          <h4>Styling</h4>
          <div>
            <div className="flex flex-wrap gap-4">
              {personInfo.skills.styles.map((style, index) => (
                <p key={index} className="text-blueGreen-200">
                  {style}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 sm:mt-8">
          <h4>Other</h4>
          <div className="flex gap-4">
            {personInfo.skills.other.map((skill, index) => (
              <p key={index} className="text-blueGreen-200">
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonInfo;

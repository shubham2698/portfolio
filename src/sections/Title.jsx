var ReactRotatingText = require('react-rotating-text');
function Title() {
    return (
        <div className="title">
            <ReactRotatingText className='title_heading' items={['Full-Stack Developer', 'Jr. DevOps Engineer', 'Ui/Ux Designer']} />
            <h4>I design and code beautifully simple things, and I love what I do.</h4>
            <img id="title_image" src="/images/mf-avatar.svg" alt="worng path"/>
      </div>
    );
  }
  
export default Title;
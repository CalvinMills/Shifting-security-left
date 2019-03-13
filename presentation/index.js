// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

const images = {
  simon: require("../assets/simon_sinek.jpg")
};

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Shifting security left
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit bold>
            The security champion journey
          </Text>
          <Notes>
            In modern development, we aim to deploy to production faster,
            however, when we do so, it is just as important to deploy products
            which are robust, not only from a fault perspective but also a
            security perspective, and this is where the new role of a security
            champion aims to provide value to the devops process.
          </Notes>
        </Slide>
        <Slide bgColor="secondary" transition={["zoom"]}>
          <Image src={images.simon} />
          <Heading size={5} textColor="primary">
            Simon Sinek
          </Heading>
          <Notes>
            Simon is an author and leadership speaker who pioneered the "Start
            with why" movement. The idea is to always consider why you do
            something before you actually do it and is meant to, if you
            subscribe to the idea, lead to more inspired solutions to problems.
            As a result I like to first consider the problem or the why to a
            scenario before I dive in.
          </Notes>
        </Slide>
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            Why am I here?
          </Heading>
          <Notes>
            Which leads me to the question, Why do you need a security champion,
            what problems does the initiative aim to solve?
          </Notes>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <List>
            <ListItem>
              <Heading size={5} textColor="secondary">
                The Devops conundrum
              </Heading>
            </ListItem>
            <ListItem>
              <Heading size={5} textColor="secondary">
                Breakdown in communication between security and development
              </Heading>
            </ListItem>
            <ListItem>
              <Heading size={5} textColor="secondary">
                Ever changing cyber security climate
              </Heading>
            </ListItem>
            <ListItem>And the list goes on</ListItem>
          </List>
          <Notes>
            The Devops conundrum - As I noted before, most engineers understand
            the advantages of deploying software faster than ever. It is
            important to note that when we do, what are the repercussions in
            terms of security, how can we ensure that the products we deliver
            meet ever increasing security requirements whilst keeping up the
            aspirational agility of a devops system. Security teams and
            development teams can sometimes be seen as serving their own
            purposes instead of working together towards the common goal which
            is deploying quality software to our clients as fast as possible.
            This doesn't happen in most environments. Every day there are new
            threats being uncovered, new threat vectors surfacing that it can be
            difficult to keep up with the cyber security world. These are just
            some of the challenges we face in terms of the relationship between
            development and security when developing software in the modern
            landscape. But you get the picture, it's hard.
          </Notes>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} textColor="secondary" caps>
            Fine we get it, security is hard, whats the solution?
          </Heading>
          <Notes>
            With security, as with every IT problem (I'm sure you're all tired
            of hearing this), there is no silver bullet. There are many
            solutions to the previously mentioned problems, what I am proposing
            is only one such solution.
          </Notes>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} textColor="secondary" caps>
            What exactly is a security champion?
          </Heading>
          <Notes>
            There is no one specific definition, as the role has evolved over
            time. Security champions are part of an app sec or development team,
            and their job is to learn or understand basic security issues. The
            idea is that the champion would then help bridge the gap between
            development and security. This definition is evolving over time and
            encompasses more than just understanding security issues and also
            relates to simple evangelism around the application security space.
            Sort of like a security cheerleader of sorts.
          </Notes>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} textColor="secondary" caps>
            So do I need super powers or something?
          </Heading>
          <Notes>
            So you may be wondering, who can possibly accept all this
            responsibilty.
          </Notes>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <List>
            <ListItem>
              <Heading size={3} textColor="secondary">
                Anyone.
              </Heading>
            </ListItem>
          </List>
          <Notes>
            Anyone in the development team can act as a security champion, the
            main pre-requesite for being a security champion is passion. About
            security, about making a difference to the development team, no
            matter what experience you have in the industry anyone can act as a
            security champion.
          </Notes>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} textColor="secondary">
            I’m a security champion now, great! Okay what do I do?
          </Heading>
          <List>
            <ListItem>
              <Heading size={5} textColor="secondary">
                Hydrate security information
              </Heading>
            </ListItem>
            <ListItem>
              <Heading size={5} textColor="secondary">
                Training/Education
              </Heading>
            </ListItem>
            <ListItem>
              <Heading size={5} textColor="secondary">
                Making security related decisions
              </Heading>
            </ListItem>
            <ListItem>Advocating best practice</ListItem>
          </List>
          <Notes>
            These are just some examples of roles a security champion can fill
            within their context. In truth, a security champions' role is to do
            anything to help progress the application security agenda within
            their team/organisation through whatever means they deem most
            fitting.
          </Notes>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} textColor="secondary" caps>
            But Calvin, why would I want to do extra work?
          </Heading>
          <Notes>
            Okay fine, we software engineers are lazy by definition, I get it.
            So why did I get into it. My previous engineering manager introduced
            it as a voluntary role in order to solve some of the problems we
            were having in terms of security becoming a bottlenech and hampering
            our deployment velocity. This really struck home for me because as a
            front end developer I like to deliver features fast and really get
            feedback from the users as soon as possible. On top of that I have
            always been intrigued by cyber security and felt like I should know
            more about application security. Also, no one else was going to talk
            to security, someone had to do it
          </Notes>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} textColor="secondary" caps>
            Okay, but I'm extra lazy, are there any cheatcodes?
          </Heading>
          <List>
            <ListItem>
              <Heading size={3} textColor="secondary">
                BSIMM.
              </Heading>
            </ListItem>
          </List>
          <Notes>
            So this is me. When we first started this journey I had no idea
            where to start. This is when, with the help of some colleagues in
            AXA Germany discovered BSIMM. BSIMM or "Building Security In
            Maturity Model" is an organisation dealing with understanding the
            maturity of an organisations security capabilities. Basically they
            deal with providing an assessment to various areas of an
            organisation which culiminates in a maturity rating and can be
            invaluable when attempting to understanding where to focus your
            efforts when making improvements to the application development
            process within your organisation.
          </Notes>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Text>Show CIMA BSIMM</Text>
          <Notes>
            So I started by making this maturity model. Using this has allowed
            us to not only determine what to focus on next in order to make our
            lifecycle more robust but also in order to track the progress we
            have made since starting the initiative.
          </Notes>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} textColor="secondary">
            That looks like more work
          </Heading>
          <Notes>
            You might be thinking "okay that's great once its done, but it looks
            like it takes alot of effort to set up". So that it is true to some
            extent. You have to do a pretty thorough self assessment in order to
            get all the data that makes up the model, but I promise that if you
            leverage it correctly it can be totally worth the time it takes to
            make. Also, if you're nice to me, I may be willing to send you my
            template!
          </Notes>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} textColor="secondary">
            Impressive, but have you actually done anything other than talk
          </Heading>
          <List>
            <ListItem>
              <Heading size={3} textColor="secondary">
                Fostering constructive relationships.
              </Heading>
              <Heading size={3} textColor="secondary">
                S-SDLC.
              </Heading>
              <Heading size={3} textColor="secondary">
                Coding standards.
              </Heading>
              <Heading size={3} textColor="secondary">
                Working on vendor SLA's.
              </Heading>
              <Heading size={3} textColor="secondary">
                IAST.
              </Heading>
            </ListItem>
          </List>
          <Notes>
            So what have we actually managed to improve on since starting this
            journey. - We have worked closely with security to become more
            mature and foster a more productive relationship. - This includes
            attempting to resolce the bottlenecks we were having with security
            sign offs for releases. - When it comes to this point it is so
            important to have the security teams' buy in for the security
            champion initiative, because otherwise your advice will fall on deaf
            ears. - Helping to document our S-SDLC and refine our process and
            make it more robust by ensuring we perform SAST and implement the
            necessary remediation and triaging of flaws. - Documenting and
            refining our coding standards helping to come up with something that
            makes sense for the development teams and also satisfies
            requirements from the security teams. - Double checking our SLA’s
            with vendors - this is a tricky one because once we are locked into
            contracts with third parties it can be difficult to change but it is
            important to enforce our 3rd parties are following the same level of
            security requirements we do. - Investigating IAST using Seeker and
            trying to implement it where we can. There are still many other
            areas of possible improvement but it's a start.
          </Notes>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} textColor="secondary">
            How do we stay informed?
          </Heading>
          <List>
            <ListItem>
              <Heading size={3} textColor="secondary">
                Blogs.
              </Heading>
              <Heading size={3} textColor="secondary">
                Guilds.
              </Heading>
              <Heading size={3} textColor="secondary">
                OWASP.
              </Heading>
            </ListItem>
          </List>
          <Notes>
            There are plenty blogs and weekly email blasts which are great
            sources for information on the sector, such as – some examples. -
            Participate in guilds – Security architecture guild. Setting up/
            have set up security champion guild. - OWASP is a non profit
            organisation which is great source on application security threats
            and a great place to start if you want to get informed.
          </Notes>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} textColor="secondary">
            How to empower members of your team to become security champions
          </Heading>
          <Notes>
            Reinforce idea that it isn’t an official position – key to remain a
            voluntary position. - Not the most exciting but it is becoming more
            apparent how key it is, best people to become champions are those
            that are enthusiastic/passionate.
          </Notes>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} textColor="secondary">
            Questions
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} textColor="secondary">
            Thank you!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}

// import React from 'react'
import PageLayout from '../../HOC/pageLayout'
// import "../css/style.css"

const pageDetails = {
    title: 'Style Sheets',
    back:'/#skills',
    next:'/framework/cloud',
    nextTitle:'Cloud Applications'
  }


const StyleSheet = () => {
    return (
        <PageLayout pageDetails={pageDetails}>
            <p>
                In the past I've used numerous styling libraries to improve User Experience (UX) including Boostrap 3, 
                Material-UI, and Materialize. These libraries are all respectable; however, they can easily become a crutch
                for developers whom don't focus on styling. I realized that I was one of those individuals and decided 
                to improve my understanding of styling through courses focusing on CSS3 and Sass. Although I'm not a 
                UX expert, I was able to improve my styling skills and make this website style sheet from scratch using
                Sass. Now that I have a good foundation, I look forward to styling instead of treating it as a chore.
            </p>
            <p>
                the following is a list of resources I have used to learn website styling:
            </p>
            <a target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/course/advanced-css-and-sass/">Advanced CSS and Sass: Flexbox, Grid, Animations and More!</a>
                <br />
            <a target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/">Build Responsive Real World Websites with HTML5 and CSS3</a>
        </PageLayout>
    )
}


export default StyleSheet

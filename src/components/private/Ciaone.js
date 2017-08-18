import React, {Component} from 'react';
import Box from 'grommet/components/Box';
import Title from 'grommet/components/Title'

class Home extends Component {
    
    static isPrivate = true;
    
    render() {
        return (
            <Box>
                <Title truncate={true}>
                    Ciaone
                </Title>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aspernatur distinctio
                    ducimus ea error esse inventore ipsa iure iusto laudantium maiores molestiae nam natus neque,
                    possimus praesentium quasi quod ratione repellat soluta vel veniam voluptates! A, beatae consequatur
                    cupiditate deleniti ducimus eaque expedita fugiat illo iure laborum neque nulla quasi quis quo,
                    reiciendis rem vel. A, eum impedit nam nulla odit pariatur sed voluptas voluptatum. Beatae commodi
                    cum exercitationem iste itaque modi quidem suscipit veniam voluptate! Atque commodi esse eum
                    inventore, iste modi perspiciatis rerum saepe sunt vel! Assumenda consequatur cumque, deserunt dolor
                    doloremque eaque enim labore possimus quasi reiciendis sit vero. Ab animi assumenda cum dolor
                    dolores hic, maxime nemo obcaecati quia rem sint vel. Ad aperiam consequatur cumque delectus dicta
                    dolor eius esse in, laboriosam officiis porro quam quis ratione soluta tempore tenetur ut
                    voluptatum? Accusamus architecto aut culpa ducimus illo nesciunt omnis quae soluta velit vitae!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto deserunt dignissimos
                    dolor dolorem et, fugiat maxime minus pariatur quas quo sequi soluta tenetur totam voluptatum?
                    Corporis dicta esse facilis fuga harum ipsum modi numquam obcaecati, omnis placeat quas qui quia
                    quos, reprehenderit voluptatum. Corporis dolor illo incidunt odio porro! Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Amet aperiam autem, consequuntur cum cupiditate debitis deserunt
                    dignissimos dolorem dolorum earum eius eos est ex exercitationem explicabo harum in iusto labore
                    nesciunt nobis obcaecati qui, rem! Accusamus animi, aspernatur, consectetur consequatur, deleniti
                    est explicabo magnam reiciendis repellendus soluta tenetur voluptatibus voluptatum?
                </p>
            </Box>
        )
    }
}

export default Home;
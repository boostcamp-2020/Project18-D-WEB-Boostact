import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const style = {
    base:{
        fontSize: 20,
        background:'#eafaff',
       '&:hover' : {
            background:'#5badf0',
        }
    },
    textSmall:{
        fontSize: 12,
    },
    textMedium:{
        fontSize: 20,
    },
    textLarge:{
        fontSize: 30
    },
    textBold:{
        fontWeight : 'bold'
    }
}

const {classes} = jss.createStyleSheet(style).attach();

export default classes;

import {StyleSheet} from 'react-native';
import {windowWidth} from '../../../components/WindowDimensions';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    backgroundColor: '#FFFFFF',
    width: windowWidth,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerWrap: {
    backgroundColor: '#EBEFF5',
    width: '95%',
    height: '70%',
    borderRadius: 30,
    flexDirection: 'row',
  },
  tabBarActive: {
    flex: 1,
    marginHorizontal: 2,
    marginVertical: 5,
    backgroundColor: '#085D7A',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textActive: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center',
  },
  textNonActive: {
    color: '#085D7A',
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center',
  },
  tabBar: {
    flex: 1,
    marginVertical: 5,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBEFF5',
  },
  imageAdmin: {
    alignSelf: 'center',
    width: 15,
    height: 15,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    height: 200,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  icon: {
    width: 50,
    height: 30,
    marginBottom: 10,
    marginLeft: 10,
    backgroundColor: '#085D7A',
    borderRadius: 5,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    margin: 5,
    backgroundColor: '#EBEFF5',
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  titleContent: {
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  desc: {
    flex: 3,
    padding: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  email: {
    flex: 3,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContent: {
    height: 80,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  wrap: {
    flex: 1,
  },

  // Modal View style
  centeredcontainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EBEFF5',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  inputContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: '35%',
    height: 35,
    borderRadius: 10,
    backgroundColor: '#085D7A',
    alignSelf: 'flex-end',
  },
  buttondelete: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: '35%',
    height: 35,
    borderRadius: 10,
    backgroundColor: '#DE1B1B',
    alignSelf: 'flex-end',
  },
  buttoncancel: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#085D7A',
    margin: 10,
    width: '35%',
    height: 35,
    borderRadius: 10,
    backgroundColor: '#085D7A',
    alignSelf: 'flex-end',
  },
  save: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  input: {
    zIndex: 3,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderColor: '#085D7A',
    marginBottom: 10,
    color: 'black',
    height: 35,
    fontSize: 14,
    paddingLeft: 10,
  },
  h2: {
    fontSize: 14,
    fontWeight: '200',
    fontFamily: 'Roboto',
  },
  textEdit: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#085D7A',
  },
  rowDelete: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
    borderTopEndRadius: 5,
    borderBottomRightRadius: 5,
  },
  backRightBtnRight2: {
    backgroundColor: '#F9CC2C',
    right: 75,
  },
  backRightBtnRight3: {
    backgroundColor: '#34A68A',
    right: 150,
  },
  rowBack: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    marginHorizontal: 8,
    margin: 5,
    borderRadius: 5,
  },
});

export default styles;

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingTop: 80,
    flex: 1,
  },
  billContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  title: {},
  logo: {
    flex: 1,
    height: 120,
    width: 90,
    alignSelf: "center",
    margin: 30,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  billItem: {
    fontSize: 20,
    fontWeight: "bold",
  },
  billItemPrice: {
    fontSize: 20,
    textAlign: "right",
  },
  billItemQuant: {
    fontSize: 15,
  },
  button: {
    backgroundColor: "#2B5DE7",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: "#2e2e2d",
  },
  subtitle: {
    marginLeft: 40,
    fontSize: 48,
    fontWeight: "bold",
  },
  footerLink: {
    color: "#788eec",
    fontWeight: "bold",
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  modalView: {
    //flexDirection: 'row',
    width: '100%',
    height: '50%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 0,
    paddingTop: 6,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  topBar: {
    flexDirection: 'row',
    width: '100%',
  },
  text: {
    justifyContent: "flex-start",
    alignItems: 'center',
    paddingLeft: 30,
    paddingTop: 20
  },
  bar: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: 'center',
  },
  buttonClose: {
    flexDirection: 'column',
    alignSelf: "flex-start",
    paddingRight: 20,
    paddingTop: 20
  },
  tipBar: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingHorizontal: 40,
  },
  buttonPay: {
    padding: 5,
    width: '100%'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  pay: {
    alignContent:'center',
    padding: 60,
    fontSize: 30,
    color: 'white'
  },
  header: {
    fontWeight: 'bold',
    fontSize: 22
  }
});

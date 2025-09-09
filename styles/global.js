import { StyleSheet } from "react-native";

const COLORS = {
  primary: '#E0115F',
  secondary: '#F4A124',
  text: '#333',
  background: '#fff',
  border: '#ddd',
  gray: '#888',
  google: '#DB4437',
  facebook: '#3b5998',
  lightgray: '#f9f9f9',
}

export const styles = StyleSheet.create({
  background: {
    flex: 1,

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    padding: 20,

  },
  headerText: {
    fontSize: 28,
    fontFamily: 'Roboto-Bold',
    color: COLORS.text,
    alignSelf: 'flex-start'
  },
  subHeaderText: {
    fontSize: 18,
    marginBottom: 30,
    color: COLORS.text,
    alignSelf: 'flex-start'

  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: COLORS.text,
    alignSelf: 'flex-start'
  },
  input: {
    height: 48,
    borderColor: COLORS.border,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 14,
    width: '100%',
  },
  forgotWrap: {
    alignSelf: 'flex-start', // overrides parent alignItems:'center'
    width: '100%',           // spans the form width
  },
  forgottext: {
    color: COLORS.text,
    marginBottom: 25,
    marginVertical: 10,
    textAlign: 'left',       // makes the text itself left-aligned
  },
  signInButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%'
  },
  signInText: {
    color: COLORS.background,
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.border,
  },
  orText: {
    marginHorizontal: 10,
    color: COLORS.gray,
    fontSize: 14,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 20,

  },
  signUpText: {
    textAlign: 'center',
    color: COLORS.text,
  },
  signUpLink: {
    color: COLORS.text,
    fontFamily: 'Roboto-Bold',
    marginLeft: 10,
    marginTop: 5
  },


  resendContainer: {
    marginTop: 20,
    alignItems: 'center',

  },

  image: {
    width: '100%',
    height: 220,
    borderRadius: 15,
    resizeMode: 'stretch'
  },
  backButton: {
    position: 'absolute',
    top: 5,
    left: 15,
    backgroundColor: COLORS.lightgray,
    borderRadius: 20,
    // padding:6,
    elevation: 3,

  },
  menuButton: {
    position: 'absolute',
    top: 5,
    right: 15,
    backgroundColor: COLORS.lightgray,
    borderRadius: 20,
    padding: 6,
    elevation: 3,
  },
  ratingBadge: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: COLORS.lightgray,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    left: 10
  },
  ratingText: {
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
  },
  timeBadge: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: COLORS.lightgray,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
    marginRight: 30

  },
  bookMark: {
    position: 'absolute',
    bottom: 5,
    right: 10,
    backgroundColor: COLORS.lightgray,
    borderRadius: 20,
    padding: 6,

  },
  detailBox: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    // color:COLORS.text,
  },
  reviews: {
    fontSize: 12,
    color: COLORS.gray,
    marginBottom: 10,

  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 5,
  },
  chefBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  chefName: {
    fontFamily: 'Roboto-Bold',
  },
  chefLocation: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  locationText: {

    fontSize: 12,
    color: COLORS.gray,
  },
  followButton: {
    marginLeft: 'auto',
    backgroundColor: COLORS.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8
  },
  followText: {
    fontSize: 13,
    color: COLORS.background
  },
  tabBox: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  activeTab: {
    paddingVertical: 6,
    paddingHorizontal: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 5
  },
  activeTabText: {
    color: COLORS.background,
    fontFamily: 'Roboto-Bold',
  },
  inactiveTab: {
    paddingVertical: 6,
    paddingHorizontal: 30
  },
  inactiveTabText: {
    color: COLORS.primary,
    fontWeight: '600'
  },
  serveRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  serveText: {
    marginLeft: 5,
    color: COLORS.gray,
  },
  itemCount: {
    marginLeft: 'auto',
    // fontFamily:'Roboto-Bold',
    color: COLORS.gray,
    // fontWeight:'bold'
  },
  ingredientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 12,
    marginVertical: 5,
  },
  ingredientText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 15,
    fontWeight: '500'
  },
  ingredientQty: {
    color: COLORS.gray,
    fontSize: 14
  },
  section: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: COLORS.background,
    borderRadius: 12,
    // marginHorizontal:10,
    marginTop: 10,
    // shadowColor:'#000'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 10
  },
  stepText: {
    fontSize: 16,
    color: COLORS.gray,
    marginBottom: 8,
    lineHeight: 22,
  },
  videoWidgetContainer: {
    //  borderBottomLeftRadius: 15, 
    //  borderBottomRightRadius: 15, 
    overflow: 'hidden',
    borderRadius: 10,
    width: '100%',
    height: 400,
    //  marginVertical:10,

  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
    flexDirection: 'row',
    marginBottom: 10
  },
  statBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    padding: 5
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  statsText: {
    color: COLORS.text

  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputBox: {
    flex: 1,
    backgroundColor: COLORS.lightgray,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginRight: 10,
    minHeight: 50,

  },
  sendButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },


})
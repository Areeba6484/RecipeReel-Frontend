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
    lightgray: '#f9f9f9'
}

export const localStyles = StyleSheet.create({

    container: {

        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 100,
        backgroundColor: COLORS.background,
        margin: 20,

    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 30,
    },
    otpBox: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 18,
        color: COLORS.text,
        marginHorizontal: 8,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        marginVertical: 10,
    },
    checkboxText: {
        marginLeft: 10,
        color: COLORS.text,

    },
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.background,
        marginTop: 30,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 10,
    },
    searchContainer: {
        flexDirection: 'row',

        alignItems: 'center',
        // marginBottom:10



    },
    searchBox: {
        paddingHorizontal: 10,
        borderRadius: 10,

        borderColor: COLORS.border,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        height: 40,
        // width:'60%',
        borderWidth: 1,


    },
    inputBox: {
        flex: 1,
        height: 40,
        fontSize: 14,
        color: COLORS.text,

        fontFamily: 'System',

    },
    searchIcon: {
        marginRight: 8,
    },
    filterButton: {
        backgroundColor: COLORS.lightgray,
        padding: 10,
        borderRadius: 10,
        marginLeft: 10
    },
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 5,


    },
    categoryButton: {

        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 10,
        marginRight: 10,
    },
    categoryActive: {
        backgroundColor: COLORS.lightgray,
    },
    card: {
        width: 160,
        marginRight: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,



    },
    wrapper: {


        shadowColor: "#000",

        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 10.00,

        elevation: 24,
        height: 150,

    },
    cardImage: {

        height: 150,
        width: '100%',

        resizeMode: "stretch",
        // borderRadius: 10,

    },
    cardDescription: {
        fontSize: 12,
        color: COLORS.text,
        marginTop: 2,
        paddingLeft: 10,
    },
    ratingBadge: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: COLORS.lightgray,
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 1,
        borderRadius: 15
    },
    starText: {
        color: COLORS.text,
        fontSize: 12,
        fontFamily: 'Roboto-Bold',
        marginLeft: 4,
    },
    cardTitle: {
        fontFamily: 'Roboto-Bold',
        marginTop: 5,
        color: COLORS.text,
        fontFamily: 'System',
        fontWeight: 'bold',

        paddingLeft: 10
    },
    cardsubTitle: {
        fontSize: 12,
        color: COLORS.text,
        fontFamily: 'System',
        fontWeight: 'bold',
        paddingLeft: 10
    },
    cardTime: {
        fontSize: 12,
        color: COLORS.text,
        marginTop: 2,


        paddingLeft: 10,
        paddingBottom: 5,

    },
    bookmarkIcon: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    newRecipeCard: {
        flexDirection: 'row',
        backgroundColor: COLORS.lightgray,
        borderRadius: 20,
        padding: 12,
        marginRight: 15,

        width: 300,
        alignItems: 'center',

    },
    newcard: {
        flex: 1,
        backgroundColor: COLORS.lightgray,
        borderRadius: 10,
        marginRight: 10,
        padding: 10,

    },
    newRecipeInfo: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 2,
    },
    recipeName: {
        fontWeight: '600',
        fontSize: 14,
        color: COLORS.text,
        marginBottom: 5,
    },
    chefText: {
        fontSize: 12,
        color: COLORS.text,
        fontWeight: 'bold',
        paddingLeft: 5
    },
    timeText: {
        fontSize: 12,
        color: COLORS.text,
        marginLeft: 4,
    },
    newRecipePhoto: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginLeft: 10,
    },
    addButton: {
        backgroundColor: COLORS.primary,
        borderRadius: 50,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        // position:'absolute',
        marginbottom: 30,
        // alignSelf:'center',
    },
    plusText: {
        fontSize: 28,
        color: COLORS.background,
        marginTop: 3,

    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 12,
        paddingBottom: 10,
        backgroundColor: COLORS.background,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: 800,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    contentBox: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    iconIntro: {
        marginBottom: 10,
    },
    title: {
        fontSize: 36,
        marginBottom: 10,
        color: '#E0115F',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subTitle: {
        fontSize: 16,
        color: COLORS.text,
        marginBottom: 30
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 300,
        color: COLORS.text,
    },
    new: {
        fontSize: 18,
        fontFamily: 'Roboto-Regular',
        color: COLORS.text
    },
    recentText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10
    },
    filterSectionTitle: {
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
        marginTop: 15,
        marginBottom: 10,
    },
    filterRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20,
    },
    filterTag: {
        borderWidth: 1,
        borderColor: COLORS.text,
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 20,
        backgroundColor: COLORS.background,
        marginRight: 10,
        marginBottom: 10
    },
    filterTagActive: {
        backgroundColor: COLORS.background,

    },
    filterTagText: {
        color: COLORS.text,
        fontWeight: '500'
    },
    filterTagTextActive: {
        color: COLORS.text
    },
    resultsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    }


})
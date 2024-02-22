import { StyleSheet } from 'react-native';

export const LandingPageScreenStyle = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    justifyContent: 'center',
    width: 400,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    alignItems: 'center',
  },
  secText: {
    fontSize: 15,
    color: 'white',
    alignItems: 'center',
  },
});

export const CustomButtonStyle = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  container_primary: { backgroundColor: '#3B71F3', color: 'white' },
  container_sec: { fontWeight: 'bold', color: '#000000' },
  container_third: { fontWeight: 'bold', color: '#5F9EA0', padding: 2 },
});

export const MatcheScreenStyle = StyleSheet.create({
  photo:{
    justifyContent:"flex-end"
  },
  container: {
    padding: 10,
    marginTop: 4,
    marginBottom: 4,
  },
  cont: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  img: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  images: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  matchItem: {
    display: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 10,
    marginBottom: 18,
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
  },
  matchTextContainer: {
    flex: 1,
    marginBottom: 5,
    justifyContent: 'center',
  },
  matchText1: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginStart: 8,
  },
  vs: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});

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
  photo: {
    justifyContent: 'flex-end',
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
  heart: {
    position: 'absolute',
    top: '70%',
    left: '50%',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export const CustomCarouselStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    maxHeight: 200,
    marginBottom: 20,
    borderRadius: 20,
  },
  slide: {
    flex: 1,
    alignItems: 'flex-end',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'flex-end',
  },
  textContainer: {
    position: 'absolute',
    top: 40,
    left: 15,
    maxWidth: 200,
  },
  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  image: {
    resizeMode: 'cover',
    width: 200,
    height: 300,
  },
});

export const MatchDetailScreenStyle = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  matchTitle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 30,
  },
  starting: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  start: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  league: {
    position: 'absolute',
    top: '20%',
    left: '50%',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export const CustomSearchBarStyle = StyleSheet.create({
  root: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    width: '80%',
    backgroundColor: 'white',
  },
});

export const PlayerScreenStyle = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  playerContainer: {
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 20,
  },
  playerImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  playerName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  commoName: {
    fontSize: 14,
    color: 'white',
  },
});

export const PlayerDetailScreenstyle = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    marginTop: 30,
    justifyContent: 'space-between',
  },
  playerInfoContainer: {
    alignItems: 'center',
  },
  playerName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  commonName: {
    fontSize: 18,
    color: 'white',
  },
  additionalInfo: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: '90%',
    padding: 5,
    borderRadius: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 12,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nationalityContainer: {
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: '90%',
    padding: 5,
    borderRadius: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  positionContainer: {
    alignItems: 'center',
  },
  detailsLabel: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  detailsValue: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  flagImage: {
    width: 30,
    height: 20,
    marginTop: 5,
  },
});

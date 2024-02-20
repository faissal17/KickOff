import { StyleSheet } from 'react-native';

export const LandingPageScreenStyle = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
});
export const MatcheScreenStyle = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
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
  },
  container_primary: { backgroundColor: '#3B71F3', color: 'white' },
  container_sec: { fontWeight: 'bold', color: '#000000' },
  container_third: { fontWeight: 'bold', color: '#5F9EA0', padding: 2 },
});

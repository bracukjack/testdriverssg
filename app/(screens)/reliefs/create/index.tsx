import BackgroundGradient from '@/components/shared/BackgroundGradient';
import Header from '@/components/shared/Header';
import {Colors} from '@/constants/Theme';
import {useRouter} from 'expo-router';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

const CreateRelief = () => {
  const [checked, setChecked] = React.useState('first');

  const router = useRouter();
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header
          onBack={() => {
            router.back();
          }}
          title="List New Post"
        />
        <View style={{flexDirection: 'row', gap: 10}}>
          <Text>Create New Post</Text>
          <Text style={{color: Colors.secondary}}>Step 1/7</Text>
        </View>

        <View
          style={{
            marginVertical: 20,
            flexDirection: 'row',
            gap: 10,
            justifyContent: 'space-between',
          }}>
          <BackgroundGradient
            styles={{borderRadius: 20, flex: 1}}
            children={<Text style={{fontSize: 5}}> </Text>}
          />
          <BackgroundGradient
            styles={{borderRadius: 20, flex: 1}}
            children={<Text style={{fontSize: 5}}> </Text>}
          />
          <BackgroundGradient
            styles={{borderRadius: 20, flex: 1}}
            children={<Text style={{fontSize: 5}}> </Text>}
          />
          <BackgroundGradient
            styles={{borderRadius: 20, flex: 1}}
            children={<Text style={{fontSize: 5}}> </Text>}
          />
          <BackgroundGradient
            styles={{borderRadius: 20, flex: 1}}
            children={<Text style={{fontSize: 5}}> </Text>}
          />
          <BackgroundGradient
            styles={{borderRadius: 20, flex: 1}}
            children={<Text style={{fontSize: 5}}> </Text>}
          />
          <BackgroundGradient
            styles={{borderRadius: 20, flex: 1}}
            children={<Text style={{fontSize: 5}}> </Text>}
          />
        </View>

        <ScrollView>
          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '600',
                color: Colors.primary,
              }}>
              What are you looking for?
            </Text>
          </View>

          <View>
            <Text>sdvsdvsdv</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    gap: 30,
  },
});

export default CreateRelief;

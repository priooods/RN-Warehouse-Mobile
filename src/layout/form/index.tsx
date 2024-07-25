import React, { Component } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { CustomRoute, RouterInterface } from '../../utils/router_component';
import { FormInput } from './model';
import Appbar from '../../components/appbar/appbar';
import InputField from '../../components/inputfield/inputfield';
import Selected from '../../components/select/select';
import { Contextdata } from '../../utils/context_provider';
import Tags from '../../components/tag/tag';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';

class Form extends Component<RouterInterface> {
  public static readonly contextType = Contextdata;
  context: React.ContextType<typeof Contextdata>;
  state: Readonly<{
    form: FormInput;
    codeCustom: undefined | string;
  }>;
  constructor(props: RouterInterface) {
    super(props);
    this.state = {
      form: {
        po_number: undefined,
        surat_jalan: undefined,
        type_tabung: undefined,
        type_transaction: undefined,
        condition: undefined,
        sender: undefined,
        receiver: undefined,
      },
      codeCustom: undefined,
    };
  }

  saveForm(form: FormInput, extra: any) {
    console.log(form, ' form saved', extra);
  }
  render() {
    const { code, deleteCode, setCode } = this.context!;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Appbar title="Form Pengajuan" router_interface={this.props} />
        <ScrollView
          keyboardShouldPersistTaps="always"
          style={{
            backgroundColor: 'white',
            paddingHorizontal: 15,
          }}
        >
          <Selected
            styleContainer={{ marginBottom: 15 }}
            label="Tipe Tabung"
            optionSelect="title"
            isRequired
            optionKey="id"
            optionLabel="title"
            placeholder="Pilih type tabung"
            options={[
              { id: 1, title: 'Oksigen (O2)' },
              { id: 2, title: 'Acetylenen (C2H2)' },
            ]}
            onSelected={(value) => {
              this.setState((prevState: any) => ({
                form: { ...prevState.form, type_tabung: value },
              }));
            }}
          />
          <Selected
            styleContainer={{ marginBottom: 15 }}
            label="Tipe Transaksi"
            optionSelect="title"
            optionKey="id"
            isRequired
            optionLabel="title"
            placeholder="Pilih type transaksi"
            options={[
              { id: 1, title: 'IN' },
              { id: 2, title: 'OUT' },
            ]}
            onSelected={(value) => {
              this.setState((prevState: any) => ({
                form: { ...prevState.form, type_transaction: value },
              }));
            }}
          />
          <Selected
            styleContainer={{ marginBottom: 15 }}
            label="Kondisi Tabung"
            optionSelect="title"
            optionKey="id"
            isRequired
            optionLabel="title"
            placeholder="Pilih kondisi tabung"
            options={[
              { id: 1, title: 'Terisi' },
              { id: 2, title: 'Kosong' },
            ]}
            onSelected={(value) => {
              this.setState((prevState: any) => ({
                form: { ...prevState.form, condition: value },
              }));
            }}
          />
          <InputField
            styleContainer={{ marginBottom: 15 }}
            label="Nomer PO"
            placeholder="Masukan Nomor PO"
            value={this.state.form.po_number}
            changeValue={(value) => {
              this.setState((prevState: any) => ({
                form: { ...prevState.form, po_number: value },
              }));
            }}
          />
          <InputField
            styleContainer={{ marginBottom: 15 }}
            label="Surat Jalan"
            placeholder="Masukan Surat Jalan"
            value={this.state.form.surat_jalan}
            changeValue={(value) => {
              this.setState((prevState: any) => ({
                form: { ...prevState.form, surat_jalan: value },
              }));
            }}
          />
          <InputField
            styleContainer={{ marginBottom: 15 }}
            label="Nama Pemberi"
            placeholder="Masukan Nama Pemberi"
            isRequired
            value={this.state.form.sender}
            changeValue={(value) => {
              this.setState((prevState: any) => ({
                form: { ...prevState.form, sender: value },
              }));
            }}
          />
          <InputField
            styleContainer={{ marginBottom: 15 }}
            label="Nama Penerima"
            placeholder="Masukan Nama Penerima"
            isRequired
            value={this.state.form.receiver}
            changeValue={(value) => {
              this.setState((prevState: any) => ({
                form: { ...prevState.form, receiver: value },
              }));
            }}
          />
          <View
            style={{
              flex: 1,
              height: 1,
              width: '100%',
              backgroundColor: '#000000',
              marginTop: 10,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              marginBottom: 10,
              color: '#4B4B4B',
            }}
          >
            List code tabung yang akan disimpan
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            {code.map((c: number) => {
              return (
                <Tags
                  style={{
                    marginRight: 10,
                    marginBottom: 8,
                  }}
                  key={c}
                  title={c}
                  deleteTags={() => deleteCode(c)}
                />
              );
            })}
          </View>
          <InputField
            styleContainer={{ marginBottom: 15, marginTop: 10 }}
            label="Code Tabung"
            placeholder="Masukan Code Tabung"
            isRequired
            inputMode="numeric"
            value={this.state.codeCustom}
            changeValue={(value) => {
              this.setState({
                codeCustom: value,
              });
            }}
          />
          <Pressable
            onPress={() => {
              if (this.state.codeCustom != undefined) {
                let checkExist = code.filter(
                  (c: number) => c === parseInt(this.state.codeCustom as string)
                );
                if (checkExist.length == 0) {
                  setCode(parseInt(this.state.codeCustom as string));
                }
                this.setState({
                  codeCustom: undefined,
                });
              } else {
                Toast.show({
                  type: ALERT_TYPE.DANGER,
                  title: 'Code Tabung Kosong',
                  textBody: 'Masukan code tabung yang ingin anda simpan',
                });
              }
            }}
            style={{
              marginEnd: 'auto',
              backgroundColor: '#FC4100',
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 10,
              alignSelf: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              Tambahkan Code
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              this.saveForm(this.state.form, code);
            }}
            style={{
              marginTop: 25,
              width: '100%',
              marginBottom: 20,
              backgroundColor: '#005FC4',
              paddingHorizontal: 20,
              paddingVertical: 13,
              borderRadius: 10,
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'white',
                alignItems: 'center',
              }}
            >
              Simpan Form Tabung
            </Text>
          </Pressable>
        </ScrollView>
        <Pressable
          onPress={() => this.props.navigasi.navigate('Barcode')}
          style={{
            borderColor: 'rgba(0,0,0,2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 65,
            bottom: 40,
            backgroundColor: '#FC4100',
            right: 25,
            height: 65,
            borderRadius: 100,
            position: 'absolute',
          }}
        >
          <Image
            style={{
              width: 30,
              height: 30,
              tintColor: 'white',
            }}
            source={{
              uri: 'https://img.icons8.com/?size=100&id=JXBQQm7sukzY&format=png&color=000000',
            }}
          />
        </Pressable>
      </SafeAreaView>
    );
  }
}

export default CustomRoute(Form);

import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(
    page_title="Peta Lokasi Penangkapan Tahunan",
    layout="wide"
)

st.title("Peta Lokasi Penangkapan Tahunan")

components.iframe(
    "https://ikhsanruntukahu.github.io/20260701_web-map-raport-nelayan/",
    height=900,
    scrolling=True
)

st.markdown("""
#ini dibuat untuk visualisasi pada raport nelayan tahunan baik secara site maupun indovidu/kapal
#Sumber Data
- *Data lokasi penangkapan**: Spottrace, Nemo dll
""")

import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(
    page_title="Peta Lokasi Penangkapan Tahunan",
    layout="wide"
)

st.title("Peta Lokasi Penangkapan Nelayan Raport Tahunan")

components.iframe(
    "https://ikhsanruntukahu.github.io/20260701_web-map-raport-nelayan/",
    height=900,
    scrolling=True
)

st.markdown("""
## WebGIS ini dibuat untuk visualisasi spasial lokasi penangkapan ikan oleh Nelayan Tuna Skala Kecil untuk ditampilkan sebagai hasil **Raport Nelayan** secara interaktif.

## Sumber Data
- **Data lokasi penangkapan**: Spottrace
""")

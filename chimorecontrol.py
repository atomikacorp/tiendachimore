import tkinter as tk
from tkinter import simpledialog
from baseapp import JobApp, InmueblesApp, MotoresApp, VariosApp

def launch_app(app_class):
    window = tk.Tk()
    app = app_class(window)
    window.mainloop()

if __name__ == '__main__':
    # Crear la ventana raíz antes de usar simpledialog
    root = tk.Tk()
    root.withdraw()  # Oculta la ventana raíz, ya que no la usaremos directamente

    app_selection = simpledialog.askstring("Seleccionar App", "Elige una opción: Job, Inmuebles, Motores, Varios", parent=root)
    apps = {
        "Job": JobApp,
        "Inmuebles": InmueblesApp,
        "Motores": MotoresApp,
        "Varios": VariosApp
    }

    selected_app_class = apps.get(app_selection, JobApp)  # Predeterminado a JobApp si no se selecciona válido
    root.destroy()  # Destruye la ventana raíz antes de lanzar la aplicación seleccionada
    launch_app(selected_app_class)
